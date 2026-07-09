import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SyntaxAndTypes = () => {
  const markdownFilePath = 'Languages/Ruby/Basics/Fundamentals/SyntaxAndTypes';

  return (
    <>
      <PageLayout>
        <PageTitle title="Syntax & Types" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SyntaxAndTypes;
