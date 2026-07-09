import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
