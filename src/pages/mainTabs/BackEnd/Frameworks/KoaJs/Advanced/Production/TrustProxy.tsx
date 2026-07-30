import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const TrustProxy = () => {
  const markdownFilePath = 'BackEnd/Frameworks/KoaJs/Advanced/Production/TrustProxy';

  return (
    <>
      <PageLayout>
        <PageTitle title="Trust Proxy" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TrustProxy;
