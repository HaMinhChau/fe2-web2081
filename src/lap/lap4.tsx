import { Table, Image, Spin, Input  } from "antd";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

function Lap4() {
    const [keyword, setKeyword] = useState("");
    
    //tự reload dữ liệu sau khi xóa
    const queryClient = useQueryClient();

    const handleDelete = async (id: number) => {
    await axios.delete(`http://localhost:3000/stories/${id}`);
    //tự reload dữ liệu sau khi xóa
    queryClient.invalidateQueries({ queryKey: ["stories"] });
    };

    const { data: stories, isLoading, isError } = useQuery({
        queryKey: ["stories"],
        queryFn: async () => {
        const res = await axios.get("http://localhost:3000/stories");
        return res.data;
    },
    });
    const columns = [
        {"title": "Tên truyện", "dataIndex": "title",  },
        {"title": "Tác giả", "dataIndex": "author",  },
        {"title": "Thể loại", "dataIndex": "genre",  },
        {"title": "Hình ảnh", "dataIndex": "image", render: (url: string) => <Image src={url} width={60}/>, },
        {"title": "Created At", "dataIndex": "createdAt", render: (data: string) => new Date(data).toLocaleDateString("vi-VN")},
        {"title": "Action", "render": (_:any, record: any) => (<button onClick={() => handleDelete(record.id)}>Xóa</button>)}
    ];
    
    const filteredData = stories?.filter((item: any) =>
    item.title.toLowerCase().includes(keyword.toLowerCase())
    );
    if (isLoading) return <Spin />;

    if (isError) return <p>Lỗi khi tải dữ liệu</p>;

    return(
        <div>
            <Input
                placeholder="Nhập tên truyện..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                style={{width: 300,marginBottom: 20,}}
                />
            <Table pagination={{ pageSize: 5 }} rowKey="id" columns={columns} dataSource={filteredData} />
        </div>
    )

}

export default Lap4;