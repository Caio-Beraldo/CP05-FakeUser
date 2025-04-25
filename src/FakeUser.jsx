import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

const _user = {
    name: "Ana Alface",
    username: "anaalface",
    email: "ana@ana.com",
    urlPhoto: "https://randomuser.me/api/portraits/med/women/56.jpg"
}



export default function FakeUser() {
    const [user, setUser] = useState(_user)

    async function loadUser() {
        console.log("Acessando randomuser....");
        let resp = await fetch("https://randomuser.me/api/")
        let data = await resp.json()
        let fakeUser = data.results[0]
        console.log("fakeUser", fakeUser);
        let _user = {
            name: fakeUser.name.first + fakeUser.name.last,
            email: fakeUser.email,
            username: fakeUser.login.username,
            urlPhoto: fakeUser.picture.medium
        }
        setUser(_user)
    }

    useEffect(() => {
        loadUser()
    }, []);
    return (
        <>
            <div className="bg-gray-50 m-1 w-120 h-18 flex items-center justify-between">
                <div className="flex gap-2">
                    <div className="w-16 h-16">
                        <img src={user.urlPhoto} alt="" className="w-16 h-16 rounded-lg mx-2 my-1" />
                    </div>
                    <div className="font-medium ml-2">
                        <div className="text-black font-bold">
                            {user.name}
                        </div>
                        <div>
                            @{user.username}
                        </div>
                        <div className="font-normal">
                            {user.email}
                        </div>
                    </div>
                </div>
                <div className="mx-2">
                    <Icon onClick={loadUser} icon="mdi-refresh" className="bg-gray-400 rounded-xl h-40px w-40px hover:bg-gray-800" />
                </div>
            </div>
        </>
    )
}