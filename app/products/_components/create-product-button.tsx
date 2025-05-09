"use client";

import { Button } from "@/app/_components/ui/button";
import { Dialog, DialogTrigger } from "../../_components/ui/dialog";
import { PlusIcon } from "lucide-react";

import UpsertProductDialogContent from "./upsert-dialog-content";
import { useState } from "react";

const CreateProductButton = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <Dialog open={dialogIsOpen} onOpenChange={setDialogIsOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <PlusIcon size={20}></PlusIcon>Novo produto
        </Button>
      </DialogTrigger>
      <UpsertProductDialogContent setDialogIsOpen={setDialogIsOpen} />
    </Dialog>
  );
};

export default CreateProductButton;
