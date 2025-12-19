import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Frontmatter = () => {
  const markdownFilePath = 'FrontEnd/Markdown/Advanced/Extending/Frontmatter';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Frontmatter" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Frontmatter;
