"use client";

import { deleteDesign } from "@/lib/Action/deleteDesign";
import { AlertDialog, Button, toast } from "@heroui/react";
import { useRouter } from "next/navigation";

const DeleteDesign = ({ design }) => {
  const router = useRouter();

  const handleDelete = async (designId) => {
    const data = await deleteDesign(designId);

    if (data.deletedCount > 0) {
      toast.success("Design deleted successfully!");
      router.refresh();
    }
  };

  return (
    <AlertDialog>
      <Button size="sm" variant="danger" className={"rounded-md"}>
        Delete
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="rounded-md">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete interior design permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>My Awesome Design</strong>{" "}
                and all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary" className={"rounded-md"}>
                Cancel
              </Button>
              <Button
                onClick={() => handleDelete(design._id)}
                slot="close"
                variant="danger"
                className={"rounded-md"}
              >
                Delete Design
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default DeleteDesign;
