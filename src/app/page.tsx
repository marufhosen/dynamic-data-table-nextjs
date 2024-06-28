import DynamicTable from "@/components/DataTable";

export default function Home() {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "firstName",
      headerName: "First name",
      width: 130,
      sortable: true,
    },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
      sortable: true,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
    },
    {
      field: "address",
      headerName: "Address",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
    },
  ];

  const rows = [
    {
      id: 1,
      lastName: "Snow",
      firstName: "Jon",
      age: 35,
      fullName: "Test",
      address: "Dhaka, Bangladesh",
    },
    {
      id: 2,
      lastName: "Lannister",
      firstName: "Cersei",
      age: 42,
      fullName: "Test",
      address: "Dhaka, Bangladesh",
    },
    {
      id: 3,
      lastName: "Lannister",
      firstName: "Jaime",
      age: 45,
      fullName: "Test",
      address: "Dhaka, Bangladesh",
    },
    {
      id: 4,
      lastName: "Stark",
      firstName: "Arya",
      age: 16,
      fullName: "Test",
      address: "Dhaka, Bangladesh",
    },
    {
      id: 5,
      lastName: "Targaryen",
      firstName: "Daenerys",
      age: null,
      fullName: "Test",
      address: "Dhaka, Bangladesh",
    },
    {
      id: 6,
      lastName: "Melisandre",
      firstName: null,
      age: 150,
      fullName: "Test",
      address: "Dhaka, Bangladesh",
    },
    {
      id: 7,
      lastName: "Clifford",
      firstName: "Ferrara",
      age: 44,
      fullName: "Test",
      address: "Dhaka, Bangladesh",
    },
    {
      id: 8,
      lastName: "Frances",
      firstName: "Rossini",
      age: 36,
      fullName: "Test",
      address: "Dhaka, Bangladesh",
    },
    {
      id: 9,
      lastName: "Roxie",
      firstName: "Harvey",
      age: 65,
      fullName: "Test",
      address: "Dhaka, Bangladesh",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">
        Dynamic Data Table with Selectable Rows
      </h1>
      <DynamicTable columns={columns} rows={rows} pagination pageSize={4} />
    </div>
  );
}
