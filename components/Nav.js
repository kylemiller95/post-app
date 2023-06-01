import Link from "next/link";
import {auth} from "../firebase";
import { useAuthState} from "react-firebase-hooks/auth";

export default function Nav() {
        const [user, loading] = useAuthState(auth);
    return (
        <nav className="flex justify-between items-center py-10">
            <Link href="/">
                <button className="text-lg font-medium">Creative Minds</button>
            </Link>
            <ul className="flex items-center gap-10">
                {!user && (
                <Link className="py-2 px-4 text-sm bg-cyan-500 text-white rounded-lg font-medium ml-8" href={"/auth/login"}>
                     Join Now
                </Link>
                )}
                {user && (
                    <div className="flex items-center gap-6">
                       <Link href='/post'>
                            <button className="font-medium bg-cyan-500 text-white py-2 px-4 rounded-mg text-small">Post</button>                       
                       </Link>
                       <Link href="/dashboard">
                            <img className="w-12 rounded-full cursor-pointer" src={user.photoURL} referrerPolicy="no-referrer"/>
                       </Link>
                    </div>
                )}
            </ul>
        </nav>
    );
}