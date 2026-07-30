import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ParamsAndQuery = () => {
  const markdownFilePath = 'BackEnd/Frameworks/ExpressJS/Basics/Routing/ParamsAndQuery';

  return (
    <>
      <PageLayout>
        <PageTitle title="Params & Query" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ParamsAndQuery;
