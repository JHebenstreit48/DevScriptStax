import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const EmbeddedLanguages = () => {
  const markdownFilePath = 'Tools/CodeQuality/Prettier/Advanced/PluginsAndExt/EmbeddedLanguages';

  return (
    <>
      <PageLayout>
        <PageTitle title="Embedded Languages" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EmbeddedLanguages;
