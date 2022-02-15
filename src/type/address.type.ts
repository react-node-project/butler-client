type AddressInfo = {
  apartment?: string;
  streetAddress: string;
  city: string;
  postcode: string;
  phoneNumber: string;
  message: string;
  id: number;
};

interface GetAddressResponse {
  addresses: AddressInfo[];
}

export type { GetAddressResponse, AddressInfo };
