"use cleint"

import { useStoreModal } from "@/hooks/use-store-modal"
import { Modal } from "@/components/ui/model";

export const StoreModal = () => {
  const storeModal = useStoreModal();

  return (
    <Modal
      title="Create a store"
      description="Add a new"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      future create Store Form
    </Modal>
  )
}