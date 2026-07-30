import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Frontmatter = () => {
  const markdownFilePath = 'FrontEnd/Markdown/Advanced/Extending/Frontmatter';

  return (
    <>
      <PageLayout>
        <PageTitle title="Frontmatter" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Frontmatter;
