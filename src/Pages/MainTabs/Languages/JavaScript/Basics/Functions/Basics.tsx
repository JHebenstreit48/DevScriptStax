import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Basics = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/Functions/BasicsAndDeclare';

  return (
    <>
      <PageLayout>
        <PageTitle title="JavaScript Functions Basics & Declarations" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Basics;