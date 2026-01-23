import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MixinsAndRefinements = () => {
  const markdownFilePath = 'Languages/Ruby/Advanced/Language/MixinsAndRefinements';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Mixins & Refinements" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MixinsAndRefinements;
