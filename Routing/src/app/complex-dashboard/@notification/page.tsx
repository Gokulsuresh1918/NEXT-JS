import Card from "@/components/card";
import Link from "next/link";

export default function notificationDashboard(){
    return <Card>notification dashboard
        <h1> <Link href='/complex-dashboard/archieved'>Archived</Link></h1>
    </Card>
}