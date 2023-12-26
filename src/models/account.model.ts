interface Account {
  email: string;
  password: string;
  options?: Record<string, string | number | boolean>
}
