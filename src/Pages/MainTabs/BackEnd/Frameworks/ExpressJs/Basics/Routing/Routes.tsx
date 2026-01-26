import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Routes = () => {
  const markdownFilePath = 'BackEnd/Frameworks/ExpressJS/Basics/Routing/Routes';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Routes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Routes;
