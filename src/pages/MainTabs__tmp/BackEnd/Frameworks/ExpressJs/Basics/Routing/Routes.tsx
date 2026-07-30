import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Routes = () => {
  const markdownFilePath = 'BackEnd/Frameworks/ExpressJS/Basics/Routing/Routes';

  return (
    <>
      <PageLayout>
        <PageTitle title="Routes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Routes;
