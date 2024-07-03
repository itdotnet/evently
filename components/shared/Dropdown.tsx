import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { ICategory } from "@/lib/database/models/category.model"
import { startTransition, useEffect, useState } from "react"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Input } from "../ui/input"
import { createCategory, getAllCategories } from "@/lib/actions/category.action"
import { createUser, getAllUsers, getUserById } from "@/lib/actions/user.actions"


type DropDownProps = {
    value?: string,
    onChangeHandler?: () => void
}

const Dropdown = ({ value, onChangeHandler }: DropDownProps) => {
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [newCategory, setNewCategory] = useState('');

    const handleAddCategory = () => {
        createCategory({
            categoryName: newCategory.trim()
        })
            .then((category) => {
                setCategories((prevState) => [...prevState, category])
            })
    }

    useEffect(() => {
        const getCategories = async () => {
            const categoryList = await getAllCategories();

            categoryList && setCategories(categoryList as ICategory[])
        }

        //getCategories();


        const getUser = async () => {
            const data = {
                clerkId: 'user_29w83sxmDNGwOuEthce5gg56FcC',
                firstName: 'Example',
                lastName: 'Example',
                userName: 'example@example.org',
                email: 'example@example.org',
                photo: 'https://img.clerk.com/xxxxxx'
            }
            const users = await createUser(data);
            console.log(users);
        }

        getUser();
    }, [])

    return (
        <Select onValueChange={onChangeHandler} defaultValue={value}>
            <SelectTrigger className="select-field">
                <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
                {categories.map((item) =>
                    <SelectItem key={item._id} value={item._id} className="select-item p-regular-14">{item.name}</SelectItem>
                )}

                <AlertDialog>
                    <AlertDialogTrigger className="p-medium-14 flex w-full rounded-sm py-3 pl-8 text-primary-500 hover:bg-primary-50 focus:text-primary-500">Add New Category</AlertDialogTrigger>
                    <AlertDialogContent className="bg-white">
                        <AlertDialogHeader>
                            <AlertDialogTitle>New Category</AlertDialogTitle>
                            <AlertDialogDescription>
                                <Input type="text" placeholder="Category name" className="mt-3" onChange={(e) => setNewCategory(e.target.value)} />
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => startTransition(handleAddCategory)}>Add</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>

            </SelectContent>
        </Select>
    )
}

export default Dropdown