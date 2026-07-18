"use client";

import { submitInteriorDesign } from "@/lib/Action/interiorDesign";
import { authClient } from "@/lib/auth-client";
import { uploadImage } from "@/lib/uploadImage";
import {
  Form,
  Input,
  Label,
  TextArea,
  TextField,
  Select,
  ListBox,
  Button,
  toast,
} from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LuArrowUpFromLine } from "react-icons/lu";

const AddDesignPage = () => {
  const [imageUrl, setImageUrl] = useState();

  const router = useRouter();

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const onSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const designData = Object.fromEntries(formData);

    const imageFile = designData?.image;
    const hostImageUrl = await uploadImage(imageFile);

    const updateData = {
      ...designData,
      image: hostImageUrl,
      userId: user?.id,
    };

    const result = await submitInteriorDesign(updateData);

    if (result.insertedId) {
      toast.success("Design submitted successfully!");
      form.reset();
      setImageUrl(undefined);
      router.push("/interior-designs");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const previewUrl = URL.createObjectURL(file);
    setImageUrl(previewUrl);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-[#927b66]">
          Create Interior Design
        </h2>

        <p className="mt-2 text-default-500 playfair text-xl">
          Share your interior design idea with complete project details.
        </p>
      </div>

      <Form
        onSubmit={onSubmit}
        className="rounded-xl border bg-white p-6 md:p-8 shadow-sm space-y-6"
      >
        {/* Title */}
        <TextField isRequired name="interior_title" type="text">
          <Label>Interior Title</Label>
          <Input
            placeholder="Enter interior title"
            className="rounded-md border border-gray-300 shadow-none"
          />
        </TextField>

        {/* Short Description */}
        <TextField isRequired name="short_description">
          <Label>Short Description</Label>
          <TextArea
            placeholder="Write a short description..."
            className="rounded-md border border-gray-300 shadow-none"
          />
        </TextField>

        {/* Full Details */}
        <TextField isRequired name="full_details">
          <Label>Full Details</Label>
          <TextArea
            placeholder="Describe your interior design..."
            className="rounded-md border border-gray-300 shadow-none min-h-32"
          />
        </TextField>

        {/* Space + Budget */}
        <div className="grid gap-4 md:grid-cols-2 w-full">
          <TextField isRequired name="space size" type="text">
            <Label>Space Size (sq ft)</Label>
            <Input
              placeholder="e.g. 250"
              className="rounded-md border border-gray-300 shadow-none"
            />
          </TextField>

          <TextField name="budget" type="number">
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

              <ListBox.Item id="garden & patio" textValue="Garden & Patio">
                Garden & Patio
                <ListBox.ItemIndicator />
              </ListBox.Item>

              <ListBox.Item id="studio apartment" textValue="Studio Apartment">
                Studio Apartment
                <ListBox.ItemIndicator />
              </ListBox.Item>

              <ListBox.Item id="office interior" textValue="Office Interior">
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

              <ListBox.Item id="farmhouse design" textValue="Farmhouse Design">
                Farmhouse Design
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>

        {/* Style + Palette */}
        <div className="grid gap-4 md:grid-cols-2 w-full">
          <TextField isRequired name="style" type="text">
            <Label>Interior Style</Label>
            <Input
              placeholder="Modern, Minimal..."
              className="rounded-md border border-gray-300 shadow-none"
            />
          </TextField>

          <TextField name="color palette" type="text">
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
                className="h-full w-full rounded-lg object-cover"
              />
            ) : (
              <>
                <LuArrowUpFromLine className="h-10 w-10 text-[#b2967d]" />

                <p className="mt-3 font-medium">Click to upload design image</p>

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
            type="submit"
            className="rounded-md bg-[#b2967d] px-8 text-white font-semibold"
          >
            Submit Design
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddDesignPage;
