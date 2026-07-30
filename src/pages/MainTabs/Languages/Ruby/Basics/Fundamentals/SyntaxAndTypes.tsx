import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
