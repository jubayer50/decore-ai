"use client";

import { editDesign } from "@/lib/Action/editDesgin";
import { uploadImage } from "@/lib/uploadImage";
import {
  Button,
  Form,
  Input,
  Label,
  ListBox,
  Modal,
  Surface,
  TextArea,
  TextField,
  Select,
  toast,
} from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { LuArrowUpFromLine } from "react-icons/lu";

const EditDesign = ({ design }) => {
  const {
    _id,
    interior_title,
    short_description,
    full_details,
    budget,
    category,
    style,
    image,
    ["space size"]: spaceSize,
    ["color palette"]: colorPalette,
  } = design;

  const [imageUrl, setImageUrl] = useState("");

  const router = useRouter();

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const previewUrl = URL.createObjectURL(file);
    setImageUrl(previewUrl);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = new FormData(form);
    const updateData = Object.fromEntries(formData.entries());

    const imageFile = formData.get("image");
    let finalImage = image;

    if (imageFile && imageFile.size > 0) {
      const hostImageUrl = await uploadImage(imageFile);
      finalImage = hostImageUrl;
    }

    const newUpdatedData = { ...updateData, image: finalImage };

    const data = await editDesign(newUpdatedData, _id);

    if (data.modifiedCount > 0) {
      toast.success("Design updated successfully!");
      router.refresh();
    }
  };

  return (
    <Modal>
      <Button
        size="sm"
        className={
          "rounded-md bg-transparent border border-[#b2967d] text-black"
        }
      >
        Edit
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="rounded-md max-w-150 w-full">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <BiEdit className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Update interior design</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-3">
              <Surface variant="default">
                <Form onSubmit={onSubmit} className="space-y-6">
                  {/* Title */}
                  <TextField
                    isRequired
                    name="interior_title"
                    type="text"
                    defaultValue={interior_title}
                  >
                    <Label>Interior Title</Label>
                    <Input
                      placeholder="Enter interior title"
                      className="rounded-md border border-gray-300 shadow-none"
                    />
                  </TextField>

                  {/* Short Description */}
                  <TextField
                    isRequired
                    name="short_description"
                    defaultValue={short_description}
                  >
                    <Label>Short Description</Label>
                    <TextArea
                      placeholder="Write a short description..."
                      className="rounded-md border border-gray-300 shadow-none"
                    />
                  </TextField>

                  {/* Full Details */}
                  <TextField
                    isRequired
                    name="full_details"
                    defaultValue={full_details}
                  >
                    <Label>Full Details</Label>
                    <TextArea
                      placeholder="Describe your interior design..."
                      className="rounded-md border border-gray-300 shadow-none min-h-32"
                    />
                  </TextField>

                  {/* Space + Budget */}
                  <div className="grid gap-4 md:grid-cols-2 w-full">
                    <TextField
                      isRequired
                      name="space size"
                      type="text"
                      defaultValue={spaceSize}
                    >
                      <Label>Space Size (sq ft)</Label>
                      <Input
                        placeholder="e.g. 250"
                        className="rounded-md border border-gray-300 shadow-none"
                      />
                    </TextField>

                    <TextField
                      name="budget"
                      type="number"
                      defaultValue={budget}
                    >
                      <Label>Budget</Label>
                      <Input
                        placeholder="e.g. 15000"
                        className="rounded-md border border-gray-300 shadow-none"
                      />
                    </TextField>
                  </div>

                  {/* Category */}
                  <Select
                    isRequired
                    name="category"
                    className="w-full"
                    placeholder="Select design category"
                    defaultValue={category}
                  >
                    <Label>Design Category</Label>

                    <Select.Trigger className="rounded-md border border-gray-300 shadow-none">
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>

                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item id="living room" textValue="Living Room">
                          Living Room
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item id="home office" textValue="Home Office">
                          Home Office
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item
                          id="garden & patio"
                          textValue="Garden & Patio"
                        >
                          Garden & Patio
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item
                          id="studio apartment"
                          textValue="Studio Apartment"
                        >
                          Studio Apartment
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item
                          id="office interior"
                          textValue="Office Interior"
                        >
                          Office Interior
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item
                          id="restaurant interior"
                          textValue="Restaurant Interior"
                        >
                          Restaurant Interior
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item id="hotel room" textValue="Hotel Room">
                          Hotel Room
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item
                          id="industrial design"
                          textValue="Industrial Design"
                        >
                          Industrial Design
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item
                          id="farmhouse design"
                          textValue="Farmhouse Design"
                        >
                          Farmhouse Design
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>

                  {/* Style + Palette */}
                  <div className="grid gap-4 md:grid-cols-2 w-full">
                    <TextField
                      isRequired
                      name="style"
                      type="text"
                      defaultValue={style}
                    >
                      <Label>Interior Style</Label>
                      <Input
                        placeholder="Modern, Minimal..."
                        className="rounded-md border border-gray-300 shadow-none"
                      />
                    </TextField>

                    <TextField
                      name="color palette"
                      type="text"
                      defaultValue={colorPalette}
                    >
                      <Label>Color Palette</Label>
                      <Input
                        placeholder="White, Beige..."
                        className="rounded-md border border-gray-300 shadow-none"
                      />
                    </TextField>
                  </div>

                  {/* Upload */}
                  <div className="w-full">
                    <Label className="mb-3 block">Design Image</Label>

                    <label
                      htmlFor="image"
                      className="flex h-56 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-[#b2967d70] bg-[#b2967d10] transition hover:bg-[#b2967d20]"
                    >
                      {imageUrl ? (
                        <Image
                          src={imageUrl}
                          alt="preview"
                          width={500}
                          height={300}
                          className="h-full w-full rounded-lg object-cover object-center"
                        />
                      ) : (
                        <>
                          <LuArrowUpFromLine className="h-10 w-10 text-[#b2967d]" />

                          <p className="mt-3 font-medium">
                            Click to upload design image
                          </p>

                          <span className="text-sm text-default-500">
                            JPG, PNG or WEBP
                          </span>
                        </>
                      )}

                      <input
                        id="image"
                        name="image"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                    </label>
                  </div>

                  {/* Button */}
                  <div className="flex justify-end w-full pt-2">
                    <Button
                      slot={"close"}
                      type="submit"
                      className="rounded-md bg-[#b2967d] px-8 text-white font-semibold"
                    >
                      Submit Design
                    </Button>
                  </div>
                </Form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default EditDesign;
