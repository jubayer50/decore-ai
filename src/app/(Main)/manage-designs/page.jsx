import DeleteDesign from "@/Components/ManageDesigns/DeleteDesign/DeleteDesign";
import EditDesign from "@/Components/ManageDesigns/EditDesign/EditDesign";
import { userInteriorDesigns } from "@/lib/api/getInteriorDesign";
import { auth } from "@/lib/auth";
import { Button, Table } from "@heroui/react";
import { headers } from "next/headers";
import Link from "next/link";

const ManageDesignPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;

  const userDesigns = await userInteriorDesigns(user?.id);

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
                    <Table.Cell>{design.createAt}</Table.Cell>

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
