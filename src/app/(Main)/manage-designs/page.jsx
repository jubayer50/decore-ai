import DeleteDesign from "@/Components/ManageDesigns/DeleteDesign/DeleteDesign";
import EditDesign from "@/Components/ManageDesigns/EditDesign/EditDesign";
import { userInteriorDesigns } from "@/lib/api/getInteriorDesign";
import { auth } from "@/lib/auth";
import { Button, Table } from "@heroui/react";
import { headers } from "next/headers";
import Link from "next/link";
import { HiOutlineHomeModern } from "react-icons/hi2";

const ManageDesignPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;

  const userDesigns = await userInteriorDesigns(user?.id);

  if (userDesigns.length === 0) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center py-6 px-4">
        <div className="max-w-xl rounded-2xl border border-[#b2967d30] bg-white p-10 text-center shadow-sm">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#b2967d20]">
            <HiOutlineHomeModern className="text-4xl text-[#b2967d]" />
          </div>

          <h2 className="mt-6 text-3xl font-bold text-[#927b66]">
            No Interior Designs Found
          </h2>

          <p className="mt-4 leading-7 text-default-500">
            You haven't added any interior designs yet. Start building your
            portfolio by sharing your first creative design. Your published
            designs will appear here, making it easy to manage, update, and
            showcase them.
          </p>

          <Link href="/add-design">
            <Button className="mt-8 rounded-md bg-[#b2967d] px-8 font-semibold text-white hover:bg-[#9f836a]">
              Add New Design
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-330 mx-auto px-3 my-10">
      <div>
        <h2 className="text-2xl font-bold">Manage Your Interior Designs</h2>
        <p className="playfair text-lg leading-6 mt-1 max-w-200 ">
          View, organize, and manage all your submitted interior design projects
          in one place. Review your designs, access details, or remove projects
          whenever needed.
        </p>
      </div>

      <div className="mt-8">
        <Table>
          <Table.ScrollContainer>
            <Table.Content aria-label="Team members" className="">
              <Table.Header>
                <Table.Column isRowHeader>#No.</Table.Column>
                <Table.Column>Interior Title</Table.Column>
                <Table.Column>Create Time</Table.Column>
                <Table.Column>Action</Table.Column>
              </Table.Header>
              <Table.Body>
                {userDesigns.map((design, i) => (
                  <Table.Row key={design._id}>
                    <Table.Cell>{i + 1}</Table.Cell>
                    <Table.Cell>{design.interior_title}</Table.Cell>
                    <Table.Cell>
                      {new Date(design.createAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </Table.Cell>

                    <Table.Cell className={"flex items-center gap-3.5"}>
                      <Link href={`/interior-designs/${design._id}`}>
                        <Button size="sm" className={"rounded-md bg-[#b2967d]"}>
                          View
                        </Button>
                      </Link>

                      <EditDesign design={design}></EditDesign>

                      <DeleteDesign design={design}></DeleteDesign>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
        </Table>
      </div>
    </div>
  );
};

export default ManageDesignPage;
