import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ProxyFix = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Flask/Advanced/Production/ProxyFix';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Proxy Fix" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProxyFix;
