import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
