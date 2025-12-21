import MainAdmin from "@/Components/FirmComponents/FirmAdmin/Dashboard/MainAdmin";

export default async function AdminDashboard({ params }) {
  const param = await params;
  const slug = await param.slug;
  return <MainAdmin slug={slug} />;
}
