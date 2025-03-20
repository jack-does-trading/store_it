import MobileNavigaion from "@/components/MobileNavigation";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import React from "react";
import { getCurrentUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import { Toaster } from 'sonner'

const Layout = async ({children}: {children: React.ReactNode}) => {

    const currentUser = await getCurrentUser();
    if(!currentUser) return redirect("/sign-in");

    return ( 
        <main className="flex h-screen">
            <Sidebar {...currentUser} />

            <section className="flex h-full flex-1 flex-col">
                <MobileNavigaion {...currentUser}/>
                <Header userId={currentUser.$id} accountId={currentUser.accountId} /> 

                <div className="main-content">{children}</div>
            </section>

            <Toaster
                toastOptions={{
                    classNames: {
                        toast: 'body-2 text-white',
                    },
                }}
            />
        </main>
     );
}
 
export default Layout;