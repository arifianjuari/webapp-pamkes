import React from "react";
import MainLayout from "../../component/Layouts/MainLayout";
import InputText from "../../component/Input/inputText";
import SubmitButton from "../../component/Button/SubmitButton";

const AddUsers: React.FC = () => {
  const onsubmit = () => {};
  const updateFormValue = ({
    updateType,
    value,
  }: {
    updateType: string;
    value: string;
  }) => {};
  return (
    <MainLayout>
      <div className="row">
        <div className="col-md-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h4 className="card-title">Tambah User</h4>
                <a
                  href="{{ route('admin.article.index') }}"
                  className="btn btn-primary"
                >
                  <i className="mdi mdi-arrow-left mdi-18px" />
                </a>
              </div>
              <p className="card-description" />
              <form
                className="forms-sample"
                method="POST"
                autoComplete="off"
                encType="multipart/form-data"
              >
                <InputText
                  type="text"
                  defaultValue=""
                  updateType="name"
                  containerStyle="mt-4"
                  labelTitle="Nama"
                  updateFormValue={updateFormValue}
                />
                <InputText
                  type="text"
                  defaultValue=""
                  updateType="name"
                  containerStyle="mt-4"
                  labelTitle="No Telepon"
                  updateFormValue={updateFormValue}
                />
                <InputText
                  type="text"
                  defaultValue=""
                  updateType="name"
                  containerStyle="mt-4"
                  labelTitle="No Telepon"
                  updateFormValue={updateFormValue}
                />
                <SubmitButton label="Submit" onClick={onsubmit} />
                <button type="reset" className="btn btn-light">
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AddUsers;
