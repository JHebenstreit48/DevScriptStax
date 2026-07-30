import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const AOPBasics = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Spring/SpringMain/Basics/DIAndAOP/AOPBasics';

  return (
    <>
      <PageLayout>
        <PageTitle title="AOP Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AOPBasics;
