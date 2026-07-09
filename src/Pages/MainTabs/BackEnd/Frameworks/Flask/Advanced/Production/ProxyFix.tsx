import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ProxyFix = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Flask/Advanced/Production/ProxyFix';

  return (
    <>
      <PageLayout>
        <PageTitle title="Proxy Fix" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProxyFix;
