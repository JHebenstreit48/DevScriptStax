import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SSRConsiderations = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Advanced/SSRAndCodeSplit/SSRConsiderations';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="SSR Considerations" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SSRConsiderations;
