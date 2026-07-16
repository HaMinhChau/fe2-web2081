import { useMutation } from "@tanstack/react-query";
import { Form, Button, Input, Select } from "antd"
import axios from "axios";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

export interface Story {
  id: number;
  title: string;
  author: string;
  genre: string;
  image: string;
  categoryId: number;
}

function Lap5() {

    const mutation = useMutation({
        mutationFn: async (data: any) => {
            const res = await axios.post("http://localhost:3000/stories", data);
            return res.data;
        },

        onSuccess: () => {
            toast.success("Thêm truyện thành công");
        },

        onError: () => {
            toast.error("Có lỗi");
        },
    })

    const onFinish = (values: Story) => {
    mutation.mutate({
        ...values,
        createdAt: new Date().toISOString(),
        });
    };

    const [categories, setCategories] = useState<any[]>([]);

    useEffect(() => {
        axios
            .get("http://localhost:3000/categories")
            .then((res) => setCategories(res.data))
            .catch((err) => console.log(err));
            
    }, []);
    return(
        <div>
            <h2>Lap5</h2>
            <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 500, margin:"30px auto"}} >
                <Form.Item
                label="Tên truyện"
                name="title"
                rules={[{required:true, message: "Nhập tên truyện đi mày"}]}
                >
                <Input placeholder="Nhập tên truyện" />
                </Form.Item>

                <Form.Item
                label="Tác Giả"
                name="author"
                rules={[{required:true, message: "Nhập tên tác giả đi mày"}]}
                >
                <Input placeholder="Nhập tên tác giả" />
                </Form.Item>
                
                <Form.Item
                label="Thể loại"
                name="genre"
                rules={[{required:true, message: "Nhập thể loại đi mày"}]}
                >
                <Select
                    placeholder="Chọn thể loại"
                    options={categories?.map((item: any) =>({
                        value: item.title,
                        label: item.title
                    }))}  
                />
                </Form.Item>

                <Form.Item
                label="Link Ảnh"
                name="image"
                rules={[{required:true, message: "Nhập link ảnh đi mày"}]}
                >
                <Input placeholder="Nhập link ảnh" />
                </Form.Item>
                
                <Button type="primary" htmlType="submit" loading={mutation.isPending}>Thêm truyện</Button>
            </Form> 
        </div>
    )
}

export default Lap5