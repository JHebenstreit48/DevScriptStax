import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const HeadersAndHSTS = () => {
  const markdownFilePath = 'BackEnd/WebServers/Nginx/Advanced/SecurityAndHardening/HeadersAndHSTS';

  return (
    <>
      <PageLayout>
        <PageTitle title="Headers & HSTS" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HeadersAndHSTS;
