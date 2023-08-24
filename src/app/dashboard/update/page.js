'use client';
import { ddbDocClient } from '../(auth)/config/ddbDocClient';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { UpdateCommand } from '@aws-sdk/lib-dynamodb';

const styles = {
  inputField:
    'form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none',
};

const UpdateData = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const data = searchParams.get('id');
  const firstName = searchParams.get('firstName');
  const lastName = searchParams.get('lastName');
  const city = searchParams.get('city');
  const phoneNumber = searchParams.get('phoneNumber');
  const dateAdded = searchParams.get('dateAdded');
  console.log(data);
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // setting up the parameters for UpdateCommand
    const params = {
      TableName: 'Users3',
      Key: {
        id: Number(data), //primaryKey
        dateAdded: dateAdded, //sortKey (if any)
      },
      UpdateExpression:
        'set firstName = :p, lastName = :r, city = :q, phoneNumber = :z, dateModified = :k',
      ExpressionAttributeValues: {
        ':p': event.target.firstName.value,
        ':r': event.target.lastName.value,
        ':q': event.target.city.value,
        ':z': event.target.phoneNumber.value,
        ':k': new Date().toLocaleString(),
      },
    };

    // updating the db
    try {
      const data = await ddbDocClient.send(new UpdateCommand(params));
      console.log('Success - updated', data);
      alert('Data Updated Successfully');
      router.push('/dashboard/login');
    } catch (err) {
      console.log('Error', err);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <p className="text-3xl mb-20">Update Data</p>
        <div className="block p-6 rounded-lg shadow-lg bg-white w-1/3 justify-self-center">
          <form onSubmit={handleSubmit} id="addData-form">
            <div className="form-group mb-6">
              <label
                htmlFor="firstName"
                className="form-label inline-block mb-2 text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                className={styles.inputField}
                id="firstName"
                name="firstName"
                defaultValue={firstName}
              />
            </div>
            <div className="form-group mb-6">
              <label
                htmlFor="lastName"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                className={styles.inputField}
                id="lastName"
                name="lastName"
                defaultValue={lastName}
              />
            </div>
            <div className="form-group mb-6">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label inline-block mb-2 text-gray-700"
              >
                City
              </label>
              <input
                type="text"
                className={styles.inputField}
                id="city"
                name="city"
                defaultValue={city}
              />
            </div>
            <div className="form-group mb-6">
              <label
                htmlFor="phoneNumber"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="number"
                className={styles.inputField}
                id="phoneNumber"
                name="phoneNumber"
                defaultValue={phoneNumber}
              />
            </div>

            <button
              type="submit"
              className="
    px-6
    py-2.5
    bg-blue-600
    text-white
    font-medium
    text-xs
    leading-tight
    uppercase
    rounded
    shadow-md
    hover:bg-blue-700 hover:shadow-lg
    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
    active:bg-blue-800 active:shadow-lg
    transition
    duration-150
    ease-in-out"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateData;
