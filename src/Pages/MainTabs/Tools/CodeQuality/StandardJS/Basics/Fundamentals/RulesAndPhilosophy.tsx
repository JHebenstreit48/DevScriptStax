import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RulesAndPhilosophy = () => {
  const markdownFilePath = 'Tools/CodeQuality/StandardJS/Basics/Fundamentals/RulesAndPhilosophy';

  return (
    <>
      <PageLayout>
        <PageTitle title="Rules & Philosophy" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RulesAndPhilosophy;
