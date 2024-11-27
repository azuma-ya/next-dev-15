"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import useConfirm from "@/hooks/use-confirm";
import type { Todo } from "@/types/todo";
import { useRouter } from "next/navigation";

interface Props {
  data: Todo;
}

const TodoModal = ({ data }: Props) => {
  const router = useRouter();
  const [ConfirmDialog, confirm] = useConfirm(
    "Are you sure?",
    "You are about delete this transaction",
  );

  const handleDelete = async () => {
    const ok = await confirm();
    if (ok) {
      console.log("confirm");
      router.back();
    }
  };

  return (
    <>
      <ConfirmDialog />
      <Dialog defaultOpen onOpenChange={router.back}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{data.title}</DialogTitle>
            <DialogDescription>
              This is test todo id for modal test. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Nostrum vitae voluptas reprehenderit
              exercitationem quod modi ullam temporibus doloremque at, veritatis
              neque laboriosam. Optio voluptatem sunt similique quidem quo?
              Consequatur rerum animi dolore, qui molestias a cupiditate, unde
              cum amet dolorum non, enim ducimus voluptate repudiandae
              blanditiis inventore rem nulla excepturi quasi autem sunt
              adipisci. Voluptatum alias perferendis debitis repudiandae
              voluptates, accusantium soluta minus sed quidem assumenda dolore
              natus, magnam repellendus quasi reiciendis quas blanditiis ea!
              Dolores ea exercitationem, quae ex cum aliquid a vero. Voluptas
              nemo dolor quam provident beatae, enim, obcaecati illum adipisci
              amet facilis suscipit animi id dolorum!
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={handleDelete}>delete</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TodoModal;
