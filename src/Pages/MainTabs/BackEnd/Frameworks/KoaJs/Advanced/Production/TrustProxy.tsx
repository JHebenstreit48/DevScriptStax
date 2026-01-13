import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TrustProxy = () => {
  const markdownFilePath = 'BackEnd/Frameworks/KoaJs/Advanced/Production/TrustProxy';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Trust Proxy" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TrustProxy;
