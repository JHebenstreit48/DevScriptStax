import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Syntax = () => {
  const markdownFilePath = 'FrontEnd/Vue/Basics/Fundamentals/Syntax';

  return (
    <>
      <PageLayout>
        <PageTitle title="Syntax" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Syntax;
