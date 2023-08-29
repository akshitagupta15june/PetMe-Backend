export interface IVolunteerUser {
  id: number,
  firstName: string,
  lastName: string | null,
  email: string,
  address: string,
  city: string,
  state: string,
  country: string,
  zipCode: string,
  phoneNumber: string,
}
