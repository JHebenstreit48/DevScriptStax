import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const HeadersAndHSTS = () => {
  const markdownFilePath = 'BackEnd/WebServers/Nginx/Advanced/SecurityAndHardening/HeadersAndHSTS';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Headers & HSTS" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HeadersAndHSTS;
