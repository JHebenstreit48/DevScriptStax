import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MixinsAndRefinements = () => {
  const markdownFilePath = 'Languages/Ruby/Advanced/Language/MixinsAndRefinements';

  return (
    <>
      <PageLayout>
        <PageTitle title="Mixins & Refinements" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MixinsAndRefinements;
