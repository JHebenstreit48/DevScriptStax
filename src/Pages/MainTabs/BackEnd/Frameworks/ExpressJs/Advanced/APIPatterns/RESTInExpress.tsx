import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RESTInExpress = () => {
  const markdownFilePath = 'BackEnd/Frameworks/ExpressJs/Advanced/APIPatterns/RESTInExpress';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="REST in Express" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RESTInExpress;
