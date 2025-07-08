import { LocaleTypes } from "@/i18n/settings";

type PageProps = {
  params: Promise<{ locale: LocaleTypes }>;
};

export default function Page(props: PageProps) {
  return <div>Homepage</div>;
}
