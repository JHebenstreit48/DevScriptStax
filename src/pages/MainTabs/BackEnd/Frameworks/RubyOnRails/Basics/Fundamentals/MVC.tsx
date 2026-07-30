import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const MVC = () => {
  const markdownFilePath = 'BackEnd/Frameworks/RubyOnRails/Basics/Fundamentals/MVC';

  return (
    <>
      <PageLayout>
        <PageTitle title="MVC" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MVC;
