import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Mixins = () => {
  const markdownFilePath = 'FrontEnd/Vue/Advanced/FrameworkFeatures/Mixins';

  return (
    <>
      <PageLayout>
        <PageTitle title="Mixins" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Mixins;
