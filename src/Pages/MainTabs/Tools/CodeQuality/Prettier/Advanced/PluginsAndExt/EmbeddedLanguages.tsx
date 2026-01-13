import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const EmbeddedLanguages = () => {
  const markdownFilePath = 'Tools/CodeQuality/Prettier/Advanced/PluginsAndExt/EmbeddedLanguages';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Embedded Languages" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EmbeddedLanguages;
