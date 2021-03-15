
import React from 'react';
import FormLayout from 'components/layouts/FormLayout';
import CreateMenu from 'components/views/menu/Create';

export default function CreateMenuPage() {
  return (
    <FormLayout
      title="Create a Menu"
      buttonSubmitText="Save/Publish"
      buttonCancelText="Cancel"
    >
      <CreateMenu />
    </FormLayout>
  );
};
