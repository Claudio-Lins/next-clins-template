import { BackofficeUser } from "@/@types/backofice-user";

export async function getClientByEmail(email: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKOFFICE_USER_BY_EMAIL_URL}${email}`,
  );
  const client: BackofficeUser = await res.json();
  return client;
}
