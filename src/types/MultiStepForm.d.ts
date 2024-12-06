export interface PersonalInformation {
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: string;
  email: string;
}

export interface DeliveryAddress {
  streetAddress: string;
  city: string;
  state: string;
  postalCode: string;
}

export interface PaymentDetails {
  cardHolderName: string;
  cardHolderFamilyName: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

interface FormData {
  personalInformation: PersonalInformation;
  deliveryAddress: DeliveryAddress;
  paymentDetails: PaymentDetails;
}
